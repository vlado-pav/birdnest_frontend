<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="content">
        <nav>
          <RouterLink to="/">About</RouterLink> 
          <RouterLink to="/violatingPilots">Violating pilots</RouterLink> 
          <RouterLink to="/currentDrones">Current drones in the area</RouterLink>
          <!-- <RouterLink to="/test">test</RouterLink> -->
        </nav>
        <RouterView />
        <footer>
          <p>
            Created by VP in January 2023
          </p>
        </footer>
  </div>
</template>

<style scoped>
  .content{
    width: 80%;
    text-align: center;
    margin: 0 auto;
  }
  nav{
    padding: 1rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  a{
    padding: 0.5rem;
    text-decoration: none;
    color: black;
    border-radius: 0.25rem;
  }
  .router-link-exact-active{
    background: #b89d09;
    font-weight: bold;
  }
  footer{
    border-top: 1px solid #888;
    font-size: 0.75rem;
    display: flex;
    justify-content: right;
  }

  @media (max-width: 600px) {
    .content{
      width: 100%;
    }
    footer p{
      margin-right: 1rem;
    }
  }
</style>
