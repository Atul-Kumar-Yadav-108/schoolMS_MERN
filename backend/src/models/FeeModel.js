import mongoose from "mongoose";

const feeSchema = new mongoose.Schema({
    studentId :{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Student",
        required : true
    },
    totalAmount : {
        type : Number,
        required : true,
        min : 0
    },
    paidAmount : {
        type : Number,
        required : true,
        min : 0
    },
    status : {
        type: String,
        enum: ["PAID", "DUE"],
        default : "DUE"
    }
},{timestamps: true});

feeSchema.pre("save", function (next){
    this.status = this.paidAmount >= this.totalAmount ? "PAID" : "DUE";
    next();
});

// add payments
feeSchema.methods.addPayment = async function(amount){
    this.paidAmount += amount;
    this.status = this.paidAmount >= this.totalAmount ? "PAID" : "DUE";
    return this.save();
}

// get remaining

feeSchema.methods.getDueAmount = async function(){
    return Math.max((this.totalAmount - this.paidAmount), 0);
}

const feeModel = mongoose.model("Fee",feeSchema);
export default feeModel;