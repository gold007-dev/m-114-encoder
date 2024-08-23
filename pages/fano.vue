<template>
	<input @input="calculate" type="text" placeholder="Your code as an Array" class="input input-bordered w-full max-w-xs my-2" ref="input" />
	<input
		type="text"
		placeholder="Result"
		class="input input-bordered w-full max-w-xs my-2"
		ref="output"
		disabled
	/>
</template>

<script lang="ts" setup>
definePageMeta({
	name: "Fano Condition",
});
const input = ref();
const output = ref();
const calculate = () => {
	let json: Array<string>;
	try {
		json = JSON.parse(input.value?.value);
	} catch (error) {
		console.log("Invalid JSON:", error);
        output.value.value = "Invalid JSON";
		return;
	}
	let famo = true;
	for (let index = 0; index < json.length; index++) {
		json.find((value, _index) => {
			if (index === _index) {
				return false;
			} else if (value.startsWith(json[index])) {
				famo = false;
				return true;
			}
		});
	}
	if (famo) {
        output.value.value="True";
    } else {
        output.value.value="False";
        
    }
};
</script>

<style></style>
