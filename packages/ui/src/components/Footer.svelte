<script lang="ts">
    const { caption } = $props<{ caption: string }>();
</script>

<footer class="w-full bg-primary-900 text-primary-50 p-4">
    <p class="text-sm">{caption}</p>
</footer>
