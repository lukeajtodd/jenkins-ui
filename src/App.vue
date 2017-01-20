<template>
  <div id="app">
    <div class="search-container">
      <input type="text" class="search" v-model="search">
    </div>
    <ul>
      <li class="build-container" v-show="status.bundle.fullDisplayName.includes(search)" v-for="status in bundles">
        <h1>{{ status.bundle.fullDisplayName }}<span class="status-orb" :class="{ success: status.lastBuildStatus }"></span></h1>
        <div>
          <!-- Last Build: <span class="bold">{{ status.bundle.number }}</span> -->
          Version: <span class="bold">{{ status.bundle.mavenArtifacts.moduleRecords[0].mainArtifact.version }}</span>
          <p><a :href="status.bundle.url">{{ status.bundle.url }}</a></p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      search: '',
      searchMatch: false,
      bundles: [

      ]

    }
  },
  created() {
    this.$http.get('http://ci.internal.plus.net/job/PlusnetSalesJourneyApplication-build-develop/lastBuild/api/json?depth=2')
      .then((response) => {
        this.bundles.push(response.data);
      });

    this.$http.get('http://ci.internal.plus.net/job/PlusnetSalesJourneyBundle-build-develop/lastBuild/api/json?depth=2')
      .then((response) => {
        this.bundles.push(response.data);
      });

    this.bundles.forEach((status) => {
      status.bundle.result == "SUCCESS" ? status.lastBuildStatus = true : status.lastBuildStatus = false;
    });
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin: 0 auto;
  margin-top: 60px;
  width: 50%;
  padding: 30px;
  border: 3px solid #000;
}

.bold {
  font-weight: bold;
}

.status-orb {
  display: inline-block;
  width: 80px;
  height: 30px;
  position: absolute;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
  background: red;
}

.success {
  background: green;
}

.build-container {
  width: 100%;
}

.search-container {
  text-align: center;
}

.search {
  width: 220px;
  height: 25px;
  border-radius: 4px;
  border: none;
  border: 2px solid #333;
}

h1 {
  position: relative;
  width: 100%;
  font-size: 1.5rem;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
