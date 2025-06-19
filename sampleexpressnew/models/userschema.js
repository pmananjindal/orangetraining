const userScheme = new mongoose.Schema({
    userName: {
        type: String,
        required: 'This field is required!'
    },
    emailId: {
          type: String,
          required: "this field is required"
    },
    password: {
        type:string
    },

});