---

layout: page

---
<script client-only>
  if(window && !customElements.get('eox-itemfilter')) import("@eox/itemfilter");
</script>

<script setup>
  import { ref, onMounted } from 'vue';
  import { withBase, useRouter } from 'vitepress';

  const router = useRouter();
  const items = ref([]);
  const error = ref('');

  const filterProps = [{
    "keys": [
      "title",
      "subtitle",
      "theme"
    ],
    "title": "By keyword",
    "type": "text",
    "placeholder": "Search in title or subtitle",
    "expanded": true
  }, {
    "key": 'theme',
    "title": 'By theme',
    expanded: true
  }
  ];

  onMounted(async () => {
    try {
      const params = new URLSearchParams(window.location.search);
      let preview_url = params.get('preview_url');
      if (preview_url) {
        sessionStorage.setItem('preview_url', preview_url);
      } else if (sessionStorage.getItem('preview_url')) {
        // try to get it from storage
        preview_url = sessionStorage.getItem('preview_url');
        const newUrl = `${withBase('/')}?preview_url=${encodeURIComponent(preview_url)}`;
        window.history.replaceState({}, '', newUrl);
      } else {
        throw new Error('Missing "preview_url" parameter in URL.');
      }

      const response = await fetch(`${preview_url}narratives.json`);
      if (!response.ok) {
        throw new Error(`Failed to fetch data from: ${preview_url}narratives.json`);
      }

      const results = await response.json();
      results.forEach(res => {
        res.image = preview_url + res.image;
      });
      items.value = results;

    } catch (err) {
      error.value = err.message;
      console.error('Fetch error:', err);
    }
  });

  // Click event handler
  const handleResultClick = (evt) => {
    const basePath = withBase('/story');
    const url = new URLSearchParams({ storyurl: evt.detail.file }).toString();
    router.go(`${basePath}?${url}`);
  };
</script>

<div class="large-space"></div>

<div v-if="error" style="color: red; font-weight: bold;">
  {{ error }}
</div>
<div v-else>
  <client-only>
    <eox-itemfilter
      :items="items"
      titleProperty="title"
      imageProperty="image"
      subTitleProperty="subtitle"
      aggregateResults="theme"
      :filterProperties="filterProps"
      resultType="cards"
      @select="handleResultClick"
      style="--select-filter-max-items: 10"
      class="large-margin bottom-margin"
    >
      <h6 slot="filterstitle" class="small vertical-margin">Filter Stories:</h6>
      <h6 slot="resultstitle" class="large large-margin vertical-margin top-padding">Stories preview selection</h6>
    </eox-itemfilter>
  </client-only>
</div>

<div class="large-space"></div>

<style>
  eox-itemfilter {
    --form-flex-direction: colrowumn;
  }
  @media (max-width: 768px) {
    eox-itemfilter {
      --form-flex-direction: column;
    }
  }
</style>
