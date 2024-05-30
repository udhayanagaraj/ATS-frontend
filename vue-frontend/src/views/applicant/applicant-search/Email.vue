<!-- EmailModal.vue -->
<template>
  <div v-if="show" class="modal-backdrop">
    <div class="modal-container">
      <div class="modal-header">
        <h5 class="modal-title">Send Email</h5>
        <button type="button" class="close" @click="close">
          <span>&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form @submit.prevent="sendEmail">
          <div class="form-group">
            <label for="emailTo">To</label>
            <input type="email" v-model="emailTo" id="emailTo" class="form-control" required>
          </div>
          <div class="form-group">
            <label for="emailSubject">Subject</label>
            <input type="text" v-model="emailSubject" id="emailSubject" class="form-control" required>
          </div>
          <div class="form-group">
            <label for="emailBody">Body</label>
            <textarea v-model="emailBody" id="emailBody" class="form-control" rows="5" required></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Send</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'email_model',
  props: {
    data:{
      type:Object,

    },
    show: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      emailTo: this.data.email,
      emailSubject: '',
      emailBody: ''
    };
  },
  methods: {
    close() {
      this.$emit('close');
    },
    sendEmail() {
      console.log('Email sent to:', this.emailTo);
      console.log('Subject:', this.emailSubject);
      console.log('Body:', this.emailBody);
      this.close();
    }
  }
};
</script>

<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-container {
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 500px;
}
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #dee2e6;
  margin-bottom: 10px;
}
.modal-body {
  max-height: 400px;
  overflow-y: auto;
}
</style>
