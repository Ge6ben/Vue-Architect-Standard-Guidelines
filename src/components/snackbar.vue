<script lang="ts" setup>
import { useSnackbar } from '@/composables/snackbar'

const { snackbar } = useSnackbar()
</script>

<template>
	<v-snackbar
		v-model="snackbar.open"
		:color="snackbar.color"
		:location="snackbar.location"
		:timeout="snackbar.time"
		style="z-index: 1007"
	>
		{{ snackbar.message }}
	</v-snackbar>
</template>
