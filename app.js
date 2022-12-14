Vue.component('notification-message', {
  template: '#notification-message-template',
  props: {
    type: {
      type: String,
      default: 'info'
    },
    header: {
      type: String,
      default: 'Information'
    },
  },
  data() {
    return {
      hidden: false
    };
  },
  methods: {
    hideNotification() {
      this.hidden = true;
    }
  }
});

new Vue({
  el: '#app',
  data: {}
});