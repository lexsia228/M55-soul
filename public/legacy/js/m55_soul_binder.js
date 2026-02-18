/**
 * M55 SOUL BINDER (Legacy Receiver)
 * Listens for 'M55_SOUL_SYNC' from Parent (React)
 */
(function() {
  console.log("[M55 Legacy] Soul Binder Active");

  window.addEventListener("message", function(event) {
    if (event.origin !== window.location.origin) return;

    const data = event.data;

    if (data && data.type === 'M55_SOUL_SYNC') {
      const user = data.payload;
      console.log("[M55 Legacy] Soul Synced:", user.user_name);

      safeBind('user_name_display', user.user_name || 'Guest');
      safeBind('user_plan_display', user.plan || 'FREE');

      document.body.classList.remove('plan-FREE', 'plan-STANDARD', 'plan-PREMIUM');
      document.body.classList.add('plan-' + (user.plan || 'FREE'));

      window.M55_CURRENT_USER = user;
    }
  });

  function safeBind(id, text) {
    const el = document.getElementById(id);
    if (el) el.innerText = text;
  }
})();
