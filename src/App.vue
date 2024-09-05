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
import sts_search from "sts_search";

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

<style scoped lang="scss">
.sts-search {
  width: 100%;
  max-width: 90dvw;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 5px;
  padding: 24px;
  background-color: #fff;
  row-gap: 80px;
  input {
    max-height: 54px;
    min-width: 314px;
    margin: 0;
    background-clip: padding-box;
    border: 1px solid #c1d1df;
    border-radius: 0.25rem;
    color: #495057;
    display: block;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 0.75rem 1rem;
    :focus {
      background: rgba(0, 97, 217, 0.1) !important;
      color: #010b23;
      border: none;
    }
  }
  .sts-input {
    position: relative;
    .sugg-absolute {
      position: absolute;
      bottom: -77px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 999;
      img {
        max-width: 280px;
        max-height: 73px;
      }
    }
  }

  .submit-butt {
    min-width: 285px;
    height: 50px;
    border-radius: 8px;
    outline: none;
    transition: background-color 0.4s ease;
    margin: 0;
    padding: 0;
    background-color: #e5e5eb;
    border: none;
    cursor: pointer;
    flex-grow: 1;
    &-active {
      background-color: #0061d9;
    }
  }
}

.backend-res {
  margin-top: 50px;
}
</style>
<style>
body {
  background-color: #f4f7fb;
}
</style>
