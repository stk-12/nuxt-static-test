<template>
  <header class="l-header">
    <div class="l-header__inner">
      <h1 class="l-header-ttl">
        <NuxtLink to="/">Nuxt Demo</NuxtLink>
      </h1>
      <nav class="l-header-nav">
        <ul class="l-header-nav__list">
          <li>
            <NuxtLink to="/about/">About</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/company/">Company</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/users/">Users</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>