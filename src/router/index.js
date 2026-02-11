import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/home/Home.vue'; 
import About from '../pages/about/About.vue';
import Phenotypes from '../pages/phenotypes/Phenotypes.vue';
import Tophits from '../pages/tophits/TopHits.vue';
import Variant from '../pages/variant/Variant.vue';
import Pheno from '../pages/pheno/Pheno.vue';
import Gene from '../pages/gene/Gene.vue';
import Region from '../pages/region/Region.vue';
import Contact from '../pages/contactUs/Contact.vue';
import API from '../pages/api/API.vue';
import Github from '../pages/github/Github.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Imaging-PheWeb2: Home',
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: 'Imaging-PheWeb2: About',
    }
  },
  {
    path: '/phenotypes',
    name: 'Phenotypes',
    component: Phenotypes,
    meta: {
      title: 'Imaging-PheWeb2: Phenotypes',
    }
  },
  {
    path: '/tophits',
    name: 'Tophits',
    component: Tophits,
    meta: {
      title: 'Imaging-PheWeb2: Tophits',
    }
  },
  {
    path: '/variant/:variant_id',
    name: 'Variant',
    component: Variant,
    meta: {
      title: 'Imaging-PheWeb2: Variant'
    }
  },
  {
    path: '/phenotypes/:phenocode',
    name: 'Pheno',
    component: Pheno,
    meta: {
      title: 'Imaging-PheWeb2: Pheno'
    }
  },
  {
    path: '/phenotypes/:phenocode/region/:region',
    name: 'Region',
    component: Region,
    meta: {
      title: 'Imaging-PheWeb2: Region'
    }
  },
  {
    path: '/gene/:gene/:phenocode?',
    name: 'Gene',
    component: Gene,
    meta: {
      title: 'Imaging-PheWeb2: Gene'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      title: 'Imaging-PheWeb2: Contact Us'
    }
  },
  {
    path: '/ui/api',
    name: 'API',
    component: API,
    meta: {
      title: 'Imaging-PheWeb2: API'
    }
  },
  {
    path: '/github',
    name: 'Github',
    component: Github,
    meta: {
      title: 'Imaging-PheWeb2: Github'
    }
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),  
  routes
});

export default router;
