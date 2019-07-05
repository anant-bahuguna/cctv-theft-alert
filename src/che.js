fetch(
  "https://firebasestorage.googleapis.com/v0/b/cctv-theft-alert.appspot.com/o/images?alt=media&token=1270e874-4cf8-4602-8981-37d52b95007f"
).then(res => {
  res.text().then(data => {
    outside = URL.createObjectURL(data)
      console.log(outside)
  });
});
