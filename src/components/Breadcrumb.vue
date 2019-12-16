<template>
	<b-breadcrumb :items="items" class="shadow-sm bg-white rounded" style="background: white"></b-breadcrumb>
</template>

<script>
    export default {
        data() {
            return {
                items: [
                    {
                        text: 'Admin',
                        href: '#'
                    },
                    {
                        text: 'Manage',
                        href: '#'
                    },
                    {
                        text: 'Library',
                        active: true
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>