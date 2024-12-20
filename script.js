const openCameraButton = document.getElementById("openCamera");
const cameraPreview = document.getElementById("cameraPreview");
const camera = document.getElementById("camera");
const captureButton = document.getElementById("capture");
const registrationForm = document.getElementById("registrationForm");

let stream;

openCameraButton.addEventListener("click", async () => {
  try {
    stream = await navigator.mediaDevices.getUserMedia({ video: true });
    camera.srcObject = stream;
    cameraPreview.classList.remove("hidden");
  } catch (error) {
    alert("ไม่สามารถเปิดกล้องได้");
  }
});

captureButton.addEventListener("click", () => {
  // Placeholder สำหรับการจับภาพ (สามารถใช้ Canvas API)
  alert("จับภาพใบหน้าเรียบร้อยแล้ว!");
});

registrationForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(registrationForm);
  // ส่งข้อมูลไปยังเซิร์ฟเวอร์
  const response = await fetch("/register", {
    method: "POST",
    body: formData,
  });
  if (response.ok) {
    alert("ลงทะเบียนสำเร็จ!");
  } else {
    alert("เกิดข้อผิดพลาดในการลงทะเบียน");
  }
});
