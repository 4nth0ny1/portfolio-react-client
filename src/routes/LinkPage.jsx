import * as React from 'react';

export default function LinkPage() {

  const blink_speed = 600; 
  setInterval(function () {
    var ele = document.querySelector('.flashing-sign');
    ele.style.visibility = (ele.style.visibility === 'hidden' ? '' : 'hidden');
  }, blink_speed);

  return (
    <main className="link-page">

      <fieldset class="flashing-sign">
          <div class="first-legend">Currently</div>
          <i class="fas fa-bullhorn"></i> 
          <div class="sign-center-text">Seeking</div>
          <div class="second-legend">Employment</div>
      </fieldset>

      <h2>Links</h2>
      <br></br>
      <p>I'm open to full-time, part-time, and contract positions.</p>
      <p>Shoot me an email, I'd love to hear from you.</p>
      <br></br>

      <p>Github: <a href="https://github.com/4nth0ny1">https://github.com/4nth0ny1</a></p>
      <p>Resume Download: <a href="/resume.docx">click to download</a></p>
      <p>Email: <a class="mailto" href="mailto:acatullo4@gamil.com">acatullo4@gmail.com</a></p>
      <p>Blog: <a href="https://acsoftware.medium.com/">https://acsoftware.medium.com</a></p>
    </main>
  );
}