<template>
  <div id="app" class="container is-max-desktop">
    <header class="header">
        <img class="header__logo" src="icons/butterfly.svg" alt="logo">

        <nav class="header__navigation">

            <ul class="navigation_unsorted-list">
                <li class="navigation_list-item">
                    <a href="index.html" class="navigation_link">Schmetterlinge in der Schweiz</a>
                </li>
            </ul>
        </nav>
    </header>
      <router-view />
  </div>
</template>
 
<script>
export default {
  name: "App",
};
</script>
 
 
<style>
html,body {
margin:0;
font-family: Helvetica, sans-serif;

}

body {
  background-image: url("/images/hintergrund.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}


.form {
  background-color: grey;
  width: 300px;
  border: 15px;
  padding: 50px;
  margin: 50px;
}

.header__logo {

    display: block;
margin: 0 auto;
height: 50px;
width: 50px;
}

.header {
    background: #F5D350;
    width: 100%;
}

.navigation_unsorted-list {
list-style: none;
display: flex ;
justify-content: center;
margin: 0;
padding: 0;

}


.navigation_list-item {

    flex: 1;
    
}

.navigation_link {
    text-decoration: none;
    color: white;
    width: 100%;
    text-align: center;
    display: block;
    padding: 10px 0;

}

.header__navigation {

    background:black

}

.banner {
position: relative;

}


.banner__image {

    height: 100%;
    width: 100%;
    object-fit: cover;

}
.banner__text{

    display: inline-block;
    position: relative;
    margin-bottom: 50px;
    background: black;
    color: aliceblue;
    left: 0;
    padding: 15px 10px;
    box-sizing: border-box;
}
.banner__text:after{
    content: ""; 
    position: absolute;
    right: -30px;
    border-bottom: 50px solid transparent;
    border-left: 30px solid black;
    top:0;
    width:0;
    height:0;

}
</style>