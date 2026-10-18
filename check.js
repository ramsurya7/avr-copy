const urls = [
  "https://preview--35b86eb7-f592-4ffd-9196-50e225662722.lovable.app",
  "https://35b86eb7-f592-4ffd-9196-50e225662722.lovableproject.com",
];

async function check() {
  for (const host of urls) {
    console.log("Checking", host);
    try {
      const res = await fetch(
        `${host}/__l5e/assets-v1/e8d1804b-caa9-41e8-b1d2-019fcf689179/team-meeting.jpg`,
      );
      console.log(host, res.status, res.headers.get("content-type"));
    } catch (e) {
      console.error(host, e.message);
    }
  }
}
check();
