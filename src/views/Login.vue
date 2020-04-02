<template>
      <!-- <v-content> -->
        <v-parallax class="parallax" src="https://www.matichon.co.th/wp-content/uploads/2018/07/%E0%B8%A0%E0%B8%9B-%E0%B8%AB%E0%B8%A1%E0%B8%AD.jpg">
      <!-- <v-container class="margin"> -->
        <v-row align="center" justify="center">
          <v-flex xs12 sm8 md4 lg6 justify-space-between>
            <v-card>
              <v-card-title>เข้าสู่ระบบ</v-card-title>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="อีเมล์"
                    v-model="email"
                    :rules="[v => !!v || 'Email is required']"
                    required
                  ></v-text-field>
                  <v-text-field
                    label="รหัสผ่าน"
                    v-model="password"
                    type="password"
                    :rules="[v => !!v || 'Password is required']"
                    required
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary">ตกลง</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-row>
      <!-- </v-container> -->
       </v-parallax>
    <!-- </v-content>s -->
</template>

<style>
.margin {
  margin-top: 200px;
}
.parallax {
   background-attachment:fixed;
   background-size: 100% auto;
}
</style>
