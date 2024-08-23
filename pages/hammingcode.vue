<template>
	<input @input="encode" type="text" placeholder="Your binary data to encode" class="input input-bordered w-full max-w-xs my-2" ref="cleartext" />
	<input @input="decode" type="text" placeholder="Your binary data to decode" class="input input-bordered w-full max-w-xs my-2" ref="encoded" />
</template>

<script lang="ts" setup>
const cleartext = ref<HTMLInputElement>();
const encoded = ref<HTMLInputElement>();

const encode = () => {
	if (cleartext.value) {/*
		console.clear();
		let output = "";
		let tempValue = cleartext.value.value;
		let index = 0;
		while (tempValue.length > 0) {
			output += "_";
			let currentVerificationBit = Math.pow(2, index);// 1, 2
			let nextVerificationBit = Math.pow(2, index + 1);// 2, 4
            // 2-1-1=0 //4-2-2
			let symbolsToNextBit = nextVerificationBit - currentVerificationBit - output.length;

			console.log(symbolsToNextBit, index);

			output += tempValue.substring(tempValue.length - symbolsToNextBit);
			tempValue = tempValue.substring(0, tempValue.length - symbolsToNextBit);

			index++;
		}
		if (encoded.value) {
			encoded.value.value = output;
		}*/

        
	}
};
const decode = () => {};
</script>

<style></style>
