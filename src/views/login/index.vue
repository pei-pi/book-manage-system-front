<template>
  <div class="container">
    <div class="login">
      <h2>登录</h2>
      <div class="box">
        <div class="form-group">
          <el-input
            v-model="form.username"
            prefix-icon="el-icon-user"
            placeholder="请输入账号"
          ></el-input>
        </div>
        <div class="form-group">
          <el-input
            placeholder="请输入密码"
            prefix-icon="el-icon-lock"
            v-model="form.password"
            show-password
          >
          </el-input>
        </div>
        <button id="btn" @click="login">确定</button>
        <router-link id="register" to="/register">注册账号</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { Message } from "element-ui";
import request from "@/assets/utils/request";
export default {
  name: "",
  mounted() {
    this.getUser();
    const username = this.$route.query.username;
    console.log(username); // 在控制台输出传递的用户名
    // if(username){
    //     this.form.username = username;
    // }
  },
  watch: {
    $route: {
      handler: function (route) {
        this.redirect = route.query && route.query.redirect;
      },
    },
  },
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      user: null,
    };
  },
  methods: {
    async login() {
      if (!/^[0-9a-zA-Z\u4e00-\u9fa5]{2,8}$/.test(this.form.username)) {
        await Message({
          message: "请输入2-8位用户名，可包含数字字母和汉字",
          type: "error",
          duration: 4 * 1000,
        });
      }
      if (!/^[a-zA-Z\d_.-@#]{6,16}$/.test(this.form.password)) {
        await Message({
          message: "请输入6-16位密码",
          type: "error",
          duration: 4 * 1000,
        });
      }
      console.log(this.user);
      for (let i = 0; i < this.user.length; i++) {
        if (this.user[i].username === this.form.username) {
          if (this.user[i].userPassword === this.form.password) {
            this.$store
              .dispatch("user/login", this.form)
              .then(() => {
                this.$router.push({ path: this.redirect || "/" });
              })
              .catch((err) => {
                console.error(err)
              });
            break;
          } else {
            await Message({
              message: "密码错误",
              type: "error",
              duration: 4 * 1000,
            });
            break;
          }
        } else {
          await Message({
            message: "用户名不存在",
            type: "error",
            duration: 4 * 1000,
          });
          break;
        }
      }
    },
    getUser() {
      return new Promise((resolve, reject) => {
        return request({
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
  background: linear-gradient(-45deg, #f9aca2, #eeafd3, #89caee, #93efe0);
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
  margin: 20px auto;
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
