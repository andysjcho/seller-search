async function searchSeller() {
  const inputNumber = document.getElementById("businessNumber").value;
  const response = await fetch("data.json");
  const data = await response.json();

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";

  const seller = data.find(item => item.businessNumber === inputNumber);

  if (seller) {
    resultDiv.innerHTML = `
      판매자ID: ${seller.sellerID} <br>
      스토어ID: ${seller.storeID} <br>
      도메인: ${seller.domain} <br>
      톡채널ID: ${seller.talkChannelID}
    `;
  } else {
    resultDiv.innerHTML = "조회 결과가 없습니다.";
  }
}
