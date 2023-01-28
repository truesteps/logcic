import { OhVueIcon, addIcons } from 'oh-vue-icons';
import { BiTwitter, BiLinkedin, BiGithub, RiLoader2Line } from "oh-vue-icons/icons";

addIcons(BiTwitter, BiLinkedin, BiGithub, RiLoader2Line);

export default defineNuxtPlugin((NuxtApp) => {
	NuxtApp.vueApp.component('VueIcon', OhVueIcon);
});
