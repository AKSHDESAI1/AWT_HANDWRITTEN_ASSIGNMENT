import express from "express";
import multer from "multer";
import path from "path";
const app = express();
const PORT = 8000;

// const upload = multer({ dest: 'uploads/' })
const imageStorage = multer.diskStorage({
    destination: 'images', // Destination to store image 
    filename: (req, file, cb) => {
        console.log("11", file);
        // cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname))
        cb(null, file.originalname)
        // file.fieldname is name of the field (image), path.extname get the uploaded file extension
    }
});
const imageUpload = multer({
    storage: imageStorage,
    limits: {
        fileSize: 1000000   // 1000000 Bytes = 1 MB
    },
    fileFilter(req, file, cb) {
        console.log("22", file);
        if (!file.originalname.match(/\.(png|jpg|JPG)$/)) {     // upload only png and jpg format
            return cb(new Error('Please upload a Image'))
        }
        cb(undefined, true)
    }
});

app.use('/img', express.static(path.join(process.cwd(), "images")))
app.use(express.static(path.join(process.cwd(), "static")))

app.get('/', (req, res) => {
    res.redirect('/uploadImage');
})

//Single Image
app.get('/uploadImage', (req, res) => {
    res.sendFile(path.join(process.cwd(), "views/singleimgIndex.html"))
})
app.post('/uploadImage', imageUpload.single('avatar'), (req, res) => {
    res.send(`<a href="http://127.0.0.1:8000/img/${req.file.filename}"> Click </a>`);
});

//Multiple Image
app.get('/uploadBulkImage', (req, res) => {
    res.sendFile(path.join(process.cwd(), "views/bulkimageIndex.html"))
})
app.post('/uploadBulkImage', imageUpload.array('avatar', 3), (req, res) => {
    console.log("33", req.files);
    res.send(req.files);
});

// Name: AKSH K DESAI 
// ID: 20CE020

app.listen(PORT, () => {
    console.log(`Server is Listening at 8000 Port.`);
})