import { OhVueIcon, addIcons } from 'oh-vue-icons';
import { BiTwitter, BiLinkedin, BiGithub } from "oh-vue-icons/icons";

addIcons(BiTwitter, BiLinkedin, BiGithub);

export default defineNuxtPlugin((NuxtApp) => {
	NuxtApp.vueApp.component('VueIcon', OhVueIcon);
});
