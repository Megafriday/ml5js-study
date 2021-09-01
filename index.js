// 分類器を作ります
const classifier = ml5.imageClassifier("MobileNet", modelReady);

function modelReady() {
	const img = document.getElementById("my_image");
	const ul = document.querySelector("ul");

	// 分類器を使って判別を実行します
	classifier.classify(img, (err, results) => {
		console.log(results);
		results.forEach(i => {
			const li = document.createElement("li");
			li.textContent = `${i.label}（${Math.floor(i.confidence * 100)}%）`;
			ul.appendChild(li);
		});
	});
}