const express = require("express");
const upload = require("../middleware/fileupload");

const { createInvoiceRecipt, getAllInvoiceRecipt,filterRecipt } = require("../controller/invoiceRecipt/invoiceRecipt");

const router = express.Router();

router.post("/", createInvoiceRecipt);
router.get("/", getAllInvoiceRecipt);
router.post("/recipt", filterRecipt);



module.exports = router;
