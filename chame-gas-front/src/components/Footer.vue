<template>
  <div class="footer">
    <div class="footer__businessInfo">
      <div class="footer__businessInfo-contact">
        <a
          class="footer__href"
          href="https://api.whatsapp.com/send/?phone=7536323370&text&type=phone_number&app_absent=0"
          target="_blank"
        >
          <img :src="WhatsLogo" alt="Whatsapp" class="footer__href-icon" />
          <p class="footer__href-text">(75) 3632-3370</p>
        </a>
        <a class="footer__href" href="https://www.instagram.com/chamegas_/" target="_blank">
          <img :src="InstaLogo" alt="Instagram" class="footer__href-icon" />
          <p class="footer__href-text">@chamegas_</p>
        </a>
      </div>
      <div class="footer__businessInfo-address">
        <a
          class="footer__href"
          href="https://www.google.com/maps/place/Chame+G%C3%A1s+e+%C3%81gua+Mineral/@-12.9726119,-39.2742455,16z/data=!4m10!1m2!2m1!1sCompanhia+de+g%C3%A1s!3m6!1s0x73e2b0d4210f797:0xba5a1d539a0d1e29!8m2!3d-12.9726113!4d-39.2698687!15sChFDb21wYW5oaWEgZGUgZ8Ohc5IBC2dhc19jb21wYW554AEA!16s%2Fg%2F11pkjqsxwd?entry=ttu&g_ep=EgoyMDI0MTAwOC4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
        >
          <img :src="Map" alt="Whatsapp" class="footer__href-icon" />
          <p class="footer__href-text">Estamos aqui</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import InstaLogo from '@/assets/imgs/footer/instagram.svg'
import WhatsLogo from '@/assets/imgs/footer/whatsaap.svg'
import Map from '@/assets/imgs/footer/map.svg'
</script>

<style scoped>
.footer {
  background-color: var(--dark-primary);
  width: 100%;
  height: 32px;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  padding: 0 20px;
}

.footer__businessInfo {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.footer__businessInfo-contact {
  display: flex;
  gap: 16px;
}

.footer__businessInfo-address {
  display: flex;
  gap: 16px;
}

.footer__href {
  display: flex;
  gap: 4px;
  text-decoration: none;
}

.footer__href:hover,
.footer__href:focus,
.footer__href:active {
  text-decoration: underline var(--black);
}

.footer__href-text {
  color: var(--black);
  font-size: 0.8rem;
  font-weight: var(--font-semibold);
  align-self: center;
}

.footer__href-icon {
  width: 20px;
}

@media screen and (max-width: 420px) {
  .footer__businessInfo {
    justify-content: center;
    gap: 16px;
  }

  .footer__href-text {
    display: none;
  }

  .footer__href-icon {
    width: 22px;
  }
}
</style>
