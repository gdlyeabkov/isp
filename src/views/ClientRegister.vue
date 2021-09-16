<template>
  <div>
    <input v-model="useremail" type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="">
    <label for="inputPassword" class="sr-only">Password</label>
    <div style="display: flex;">
      <input ref="passwordfield" v-model="userpassword" type="password" id="inputPassword" class="form-control" placeholder="Password" required="">
      <span ref="visibilitybtn" style="margin: 5px; cursor: pointer;" class="material-icons" @click="toggleVisibility()">
        visibility
      </span>
    </div>
    <label for="inputEmail" class="sr-only">Name</label>
    <input  v-model="username" type="text" id="inputEmail" class="form-control" placeholder="Name" required="" autofocus="">
    <label for="inputEmail" class="sr-only">Age</label>
    <input  v-model="userage" type="number" id="inputEmail" class="form-control" placeholder="Age" required="" autofocus="">
    
    <div class="checkbox mb-3">
    </div>
    <button @click="register()" class="btn btn-lg btn-primary btn-block registerBtn">Зарегестрироваться</button>
    <div class="customErros">{{ errors }}</div>
  </div>
</template>

<script>
export default {
  name: 'ClientLogin'
}
</script>
