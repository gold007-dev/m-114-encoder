<template>
	<input @input="encode" type="text" placeholder="Your message to encode" class="input input-bordered w-full max-w-xs my-2" ref="cleartext" />
	<input @input="decode" type="text" placeholder="Your message to decode" class="input input-bordered w-full max-w-xs my-2" ref="encoded" />
</template>

<script lang="ts" setup>
const cleartext = ref<null | HTMLInputElement>(null);
const encoded = ref<null | HTMLInputElement>(null);
const values = {
	"a": ".-",
	"b": "-...",
	"c": "-.-.",
	"d": "-..",
	"e": ".",
	"f": "..-.",
	"g": "--.",
	"h": "....",
	"i": "..",
	"j": ".---",
	"k": "-.-",
	"l": ".-..",
	"m": "--",
	"n": "-.",
	"o": "---",
	"p": ".--.",
	"q": "--.-",
	"r": ".-.",
	"s": "...",
	"t": "-",
	"u": "..-",
	"v": "...-",
	"w": ".--",
	"x": "-..-",
	"y": "-.--",
	"z": "--..",
};

const encodedValues = {};
for (const encodedValue in values) {
	encodedValues[values[encodedValue]] = encodedValue;
}

const encode = () => {
	encoded.value.value = "";
	cleartext.value.value
		.toLowerCase()
		.split("")
		.forEach((char) => {
			encoded.value.value += values[char] + " ";
		});
};
const decode = () => {
	cleartext.value.value = "";
	encoded.value.value
		.toLowerCase()
		.split(" ")
		.forEach((char) => {
			cleartext.value.value += encodedValues[char];
		});
};
</script>

<style></style>
