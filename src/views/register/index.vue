<template>
  <div class="container">
    <div class="login">
      <h2>注册</h2>
      <div class="box">
        <div class="form-group">
          <el-input
            id="username"
            prefix-icon="el-icon-user"
            v-model="form.username"
            placeholder="请输入账号"
            style="border-radius: 50px"
          ></el-input>
        </div>
        <div class="form-group">
          <el-input
            placeholder="请输入密码"
            prefix-icon="el-icon-lock"
            v-model="form.password"
            id="password"
            show-password
            style="border-radius: 50px"
          ></el-input>
        </div>
        <div class="form-group">
          <el-input
            placeholder="请确认密码"
            prefix-icon="el-icon-lock"
            v-model="form.passwordagain"
            id="passwordagain"
            show-password
            style="border-radius: 50px"
          ></el-input>
        </div>
        <button id="btn" @click="register">确定</button>
        <router-link id="register" to="/login">立即登录</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { Message } from "element-ui";
import request from "@/assets/utils/request";
export default {
  name: "Register",
  created() {
    this.loadUserData(); // 调用方法
  },
  data() {
    return {
      form: {
        username: "",
        password: "",
        passwordagain: "",
      },
      user: null,
    };
  },
  methods: {
    register() {
      const illegalRegex = /^[A-Za-z0-9_@#$&]{6,16}$/; //字母数字_@#$&外为非法字符
      const usernameRegex = /^[0-9a-zA-Z\u4e00-\u9fa5]{2,8}$/; //用户名正则
      const nameList = this.user.map((item) => item.username);
      console.log();
      if (!(nameList.indexOf(this.form.username) === -1)) {
        //待添加：判断数据库中是否存在此用户名
        this.$message.error("用户名被使用");
      } else if (!usernameRegex.test(this.form.username)) {
        this.$message.error("请输入2-8位用户名，可包含数字字母和汉字");
      } else if (
        !illegalRegex.test(this.form.password) ||
        !illegalRegex.test(this.form.passwordagain)
      ) {
        this.$message.error("请输入6-16位密码");
      } else if (this.form.password !== this.form.passwordagain) {
        this.$message.error("两次密码不一致");
      } else {
        new Promise((resolve, reject) => {
          request({
            url: "/user/insertUser",
            method: "post",
            data:{
                username:this.form.username,
                userPassword:this.form.password
            }
          })
            .then((res) => {
              console.log(res);
              Message({
                message: "注册成功",
                type: "success",
                duration: 4 * 1000,
              });
            })
            .catch((err) => {
              console.error(err);
            });
        });
        this.$store
              .dispatch("user/login", this.form)
              .then(() => {
                this.$router.push({ path: this.redirect || "/" });
              })
              .catch((err) => {
                console.error(err)
              });
      }
    },
    loadUserData() {
      return new Promise((resolve, reject) => {
        request({
          url: "/user/user",
          method: "get",
        })
          .then((res) => {
            this.user = res.data.user;
            resolve(res);
          })
          .catch((err) => {
            console.error(err);
            reject(err);
          });
      });
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.container {
  width: 100%;
  height: 100vh;
  background: linear-gradient(-45deg, #faa79c, #f6badc, #89caee, #93efe0);
  background-size: 400% 400%;
  animation: moveBg 4s linear infinite;
}

@keyframes moveBg {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0 50%;
  }
}

.login {
  width: 480px;
  height: 356px;
  /* background: red; */
  background: rgba(21, 124, 172, 0.493);
  position: absolute;
  top: calc(50% - 178px);
  left: calc(50% - 240px);
  border-radius: 16px;
  box-shadow: 0 0 5px 0px rgba(123, 194, 199, 0.411);
}

.box {
  width: 100%;
  height: 200px;
  /* background-color: red; */
  position: absolute;
  top: 25%;
}

input {
  width: 356px;
  height: 30px;
  outline-style: none;
  border: none;
  border-bottom: 2px solid #ffffff;
  display: block;
  font-size: 18px;
  color: #ffffff;
  background: transparent;
}

label {
  display: block;
  color: #ffffff;
}

.form-group {
  width: 365px;
  height: 50px;
  /* background: blue; */
  margin: 5px auto;
}

h2 {
  text-align: center;
  font-size: 34px;
  color: #ffffff;
  border-bottom: 3px solid #ffffff;
  width: 160px;
  padding-bottom: 4px;
  margin: 8px auto;
}

::v-deep .el-input__inner {
  border-radius: 50px;
  /* 修改内部input元素的圆角 */
}

#btn {
  font-size: 20px;
  font-weight: bold;
  width: 500px;
  height: 40px;
  text-decoration: none;
  position: absolute;
  left: calc(50% - 110px);
  bottom: -27px;
  border: none;
  font-size: 14px;
  font-family: inherit;
  color: #fff;
  width: 15em;
  height: 3em;
  line-height: 2em;
  text-align: center;
  background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
  background-size: 300%;
  border-radius: 30px;
  z-index: 1;
}

#btn:hover {
  animation: ani 8s linear infinite;
  border: none;
}

@keyframes ani {
  0% {
    background-position: 0%;
  }

  100% {
    background-position: 400%;
  }
}

#btn:before {
  content: "";
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  z-index: -1;
  background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
  background-size: 400%;
  border-radius: 35px;
  transition: 1s;
}

#btn:hover::before {
  filter: blur(20px);
}

#btn:active {
  background: linear-gradient(32deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
}

a,
a:hover {
  text-decoration: none;
  color: #ffffff;
}

#register {
  color: rgb(158, 240, 246);
  position: absolute;
  bottom: -58px;
  left: 10px;
}

#register:hover {
  color: #ffffff;
}
</style>
