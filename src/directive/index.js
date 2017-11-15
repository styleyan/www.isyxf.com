import Vue from 'vue'
import directive from './focus/index'
Object.keys(directive).forEach((key) => Vue.directive(key, directive[key]))
