const userModel = require('../models/user')
const bcrypt = require('bcrypt')

exports.register = (data) =>
new Promise(async (resolve, rejects) => {
    const salt = bcrypt.genSaltSync(10)
    const encrypt = bcrypt.hashSync(data.password, salt)
    Object.assign(data, {
        password: encrypt
    })
    userModel.findOne({
        username: data.username
    }).then(async(dataUser) => {
        if(dataUser){
            rejects({
                status: false,
                msg: 'username telah terdaftar'
            })
        }else{
            await userModel.create(data)
            .then(()=> {
                resolve({
                    status: true,
                    msg: 'Success Registrasi',
                    data: data
                })
            }).catch((err) => {
                rejects({
                    status: false,
                    msg:'Server Error',
                    desc: err
                })
            })
        }
    })
})

exports.login = (data) =>
new Promise(async (resolve, reject) => {
    userModel.findOne({
        username: data.username
    }).then(async(dataUser) => {
        if(dataUser){
            if(await bcrypt.compare(data.password, dataUser.password)){
                resolve({
                    status: true,
                    msg: `Selamat datang ${dataUser.namaLengkap}`,
                    data: dataUser
                })
            }else{
                reject({
                    status: false,
                    msg: 'Password anda Salah'
                })
            }
        }else{
            reject({
                status: false,
                msg: 'username Tidak ditemukan'
            })
        }
    }).catch((err) => {
        reject({
            status: false,
            msg: 'Server Error'
        })
    })
})