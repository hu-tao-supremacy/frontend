<template>
  <footer class="grid grid-cols-4 h-20 bg-blue-11">
    <div></div>
    <div
      class="col-span-2 flex flex-col items-center text-center py-3 justify-center"
    >
      <base-icon
        width="160"
        height="40"
        viewBox="0 0 161 40"
        class="mb-1 text-transparent"
        ><OnePassLogo
      /></base-icon>
      <div class="w-0.25 h-2 bg-white mb-1 rounded-sm"></div>
      <div v-if="hasGithubMember" class="flex space-x-1">
        <BaseGithubProfileCircle
          v-for="member in githubMembers"
          :key="member.id"
          :imgUrl="member.avatar_url"
          :name="member.login"
          :href="member.html_url"
        />
      </div>
    </div>
    <div
      class="flex flex-col items-end justify-between text-right text-white pr-3 py-1"
    >
      <base-transparent-button
        @click="backToTop"
        class="flex items-center group"
      >
        Back to the top
        <span class="text-primary ml-1 group-hover:text-primary-5"
          ><base-icon width="16px" height="16px"><ChevronsUpIcon /></base-icon
        ></span>
      </base-transparent-button>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, Ref, computed } from "vue";
import ChevronsUpIcon from "@/assets/ChevronsUp.vue";
import OnePassLogo from "@/assets/OnePassLogoWhite.vue";
import BaseTransparentButton from "@/commons/UI/BaseTransparentButton.vue";
import BaseGithubProfileCircle from "@/commons/UI/BaseGithubProfileCircle.vue";
import { GithubMember } from "@/commons/Interfaces";

export default defineComponent({
  name: "PageFooter",
  components: {
    ChevronsUpIcon,
    BaseTransparentButton,
    BaseGithubProfileCircle,
    OnePassLogo
  },
  setup() {
    const githubMembers: Ref<GithubMember[]> = ref([]);

    async function getMembersData() {
      const data = await (
        await fetch(
          "https://api.github.com/orgs/hu-tao-supremacy/public_members"
        )
      ).json();
      if (data.sort) {
        data.sort((a: GithubMember, b: GithubMember) =>
          a.login.localeCompare(b.login)
        );
        return data;
      }
      return [];
    }

    onMounted(async () => {
      const data = await getMembersData();
      githubMembers.value = data;
    });

    const hasGithubMember = computed(() => {
      return githubMembers.value.length !== 0;
    });

    function backToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return { githubMembers, hasGithubMember, backToTop };
  }
});
</script>
