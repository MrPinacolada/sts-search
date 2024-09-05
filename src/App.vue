<template>
  <section class="sts-search">
    <div class="sts-input">
      <label>СТС</label>
      <input
        type="text"
        v-model="userStsMasked"
        placeholder="00 AA 000000"
        maxlength="10"
        @input="applyMask"
      />
      <span class="sugg-absolute">
        <img src="../public/img/sts.6d57bfd.webp" alt="" />
      </span>
    </div>
    <div v-if="userStsMasked.length === 10" class="email-input">
      <label>Email</label>
      <input type="email" v-model="userEmail" />
    </div>
    <button
      class="submit-butt"
      :class="{
        'submit-butt-active': validate,
      }"
      @click="fetchSts"
    >
      Проверить
    </button>
  </section>
  <section class="backend-res">
    {{ backRes }}
  </section>
  <sts_search />
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import './assets/styles.scss'

const userSts = ref<string>("");
const userStsMasked = ref<string>("");
const userEmail = ref<string>("");
const backRes = ref();

const validate = computed(
  () => userStsMasked.value.length === 10 && userEmail.value.includes("@")
);

const applyMask = () => {
  let value = userStsMasked.value.replace(/\W/gi, "");

  let masked = "";

  for (let i = 0; i < value.length; i++) {
    if (i < 2) {
      if (/\d/.test(value[i])) {
        masked += value[i];
      }
    } else if (i >= 2 && i < 4) {
      if (/[A-Za-z]/.test(value[i])) {
        masked += value[i].toUpperCase();
      }
    } else if (i >= 4 && i < 10) {
      if (/\d/.test(value[i])) {
        masked += value[i];
      }
    }
  }

  userStsMasked.value = masked;
  userSts.value = masked;
};

const fetchSts = async () => {
  if (!validate.value) return;
  const searchData = {
    document_type: "ctc",
    document_value: userSts.value,
  };
  try {
    const data = await fetch(
      "https://api.xn--80ajbekothchmme5j.xn--p1ai/v3/gibdd/search",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer cWdOIL-igyEmOH500qRnRhTBnaglMAwu",
        },
        body: JSON.stringify({ data: searchData }),
      }
    );
    if (!data.ok) {
      showBackendError(data);
      return;
    }
    backRes.value = data.body;
  } catch (error) {
    console.log("error: ", error);
    throw new Error(error);
  }
};

const showBackendError = (data: Response) => {
  console.log("some error");
  backRes.value = "some error";
};
</script>

<style scoped lang="scss"></style>
