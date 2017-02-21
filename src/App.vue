<template>
  <div id="app">
    <div class="search-container">
      <input type="text" class="search" v-model="search">
    </div>
    <ul>
      <li class="build-container" v-show="bundle.fullDisplayName.includes(search)" v-for="bundle in bundles">
        <h1>{{ bundle.fullDisplayName }}<span class="status-orb" :class="{ success: bundle.result === 'SUCCESS' }"></span></h1>
        <div>
          <!-- Last Build: <span class="bold">{{ bundle.number }}</span> -->
          Version: <span class="bold" v-if="Object.keys(bundle.mavenArtifacts).length !== 0">{{ bundle.mavenArtifacts.moduleRecords[0].mainArtifact.version }}</span>
          <p class="url">Build page: <a :href="bundle.url">{{ bundle.url }}</a></p>
          <p>Last commit: <a :href="gitPage(bundle.actions[4].lastBuiltRevision.SHA1)">{{ bundle.actions[4].lastBuiltRevision.SHA1 }}</a></p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import PSJA from './PSJA'
import PSJB from './PSJB'
import GSJB from './GSJB'
import PAB from './PAB'
export default {
  name: 'app',
  data () {
    return {
      search: '',
      searchMatch: false,
      bundles: [
        PSJA,
        PSJB,
        GSJB,
        PAB
      ]

    }
  },
  methods: {
    gitPage: function(commit) {
      return `http://git.internal.plus.net/plusnet/PlusnetAssetsBundle.git/commit/?h=develop&id=${commit}`;
    }
  },
  created() {
    // this.$http.get('http://ci.internal.plus.net/job/PlusnetSalesJourneyApplication-build-develop/lastBuild/api/json?depth=2')
    //   .then((response) => {
    //     this.bundles.push(response.data);
    //   });

    // this.$http.get('http://ci.internal.plus.net/job/PlusnetSalesJourneyBundle-build-develop/lastBuild/api/json?depth=2')
    //   .then((response) => {
    //     this.bundles.push(response.data);
    //   });

    // this.bundles.forEach((status) => {
    //   status.bundle.result == "SUCCESS" ? status.lastBuildStatus = true : status.lastBuildStatus = false;
    // });
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

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
  width: 15px;
  height: 15px;
  border-radius: 50%;
  position: absolute;
  left: -25px;
  top: 50%;
  transform: translateY(-60%);
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
  border: 2px solid #333;
}

.url {
  display: block;
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  position: relative;
}

h1 {
  display: inline-block;
  position: relative;
  font-size: 1.3rem;
  margin: 1rem 0;
  margin-left: 30px;
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
  margin: 1rem;
}

a, p {
  font-size: 0.9rem;
  margin: 1rem 0;
}

a {
  color: #d33833;
}
</style>
