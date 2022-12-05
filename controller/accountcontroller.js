

const createUser = (req,req) => {
    const { name,email,pass,re_pass } = req.body
    console.log(name,email,pass,re_pass);
}

const loginUser = (req,req) => {
    const { name,password } = req.body
}

const resetUserPasswordRequest = (req,req) => {
    const { email } = req.body
}