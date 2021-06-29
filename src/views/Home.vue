<template>
  <div>
    <Navbar />
    <b-carousel
      id="carousel-no-animation"
      style="text-shadow: 0px 0px 2px #000"
      no-animation
      indicators
      img-width="1024"
      img-height="480"
    >
      <b-carousel-slide
        caption="First slide"
        img-src="https://images.pexels.com/photos/927451/pexels-photo-927451.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="Second Slide"
        img-src="https://images.pexels.com/photos/1181360/pexels-photo-1181360.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="Third Slide"
        img-src="https://images.pexels.com/photos/1181435/pexels-photo-1181435.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="Fourth Slide"
        img-src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      ></b-carousel-slide>
    </b-carousel>
    <div>
      <div class="row mt-4 mb-3">
        <div class="col-md-4">
          <div class="card d-flex mx-auto">
            <div class="card-image">
              <img
                class="img-fluid d-flex mx-auto"
                src="https://i.imgur.com/3TlwnLF.jpg"
              />
            </div>
            <div class="card-text">
              <div class="card-title">Lorem Ipsum!</div>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Nam quam nunc, blandit
              vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et
              ante tincidunt tempus Duis leo. Donec sodales sagittis magna
            </div>
            <div class="footer">
              <span id="name">Micheal Smith<br /></span>
              <span id="position">CEO of <a href="#">Google.com</a></span>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card d-flex mx-auto">
            <div class="card-image">
              <img
                class="img-fluid d-flex mx-auto"
                src="https://i.imgur.com/Uz4FjGZ.jpg"
              />
            </div>
            <div class="card-text">
              <div class="card-title">Lorem Ipsum!</div>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Nam quam nunc, blandit
              vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et
              ante tincidunt tempus Duis leo. Donec sodales sagittis magna
            </div>
            <div class="footer">
              <span id="name">Angellia Miller<br /></span>
              <span id="position">CEO of <a href="#">Facebook.com</a></span>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card d-flex mx-auto">
            <div class="card-image">
              <img
                class="img-fluid d-flex mx-auto"
                src="https://i.imgur.com/udGH5tO.jpg"
              />
            </div>
            <div class="card-text">
              <div class="card-title">Lorem Ipsum!</div>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Nam quam nunc, blandit
              vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et
              ante tincidunt tempus Duis leo. Donec sodales sagittis magna
            </div>
            <div class="footer">
              <span id="name">Christina Williams<br /></span>
              <span id="position"
                >UX Designer at <a href="#">Youtube.com</a></span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer class="site-footer mt-4">
      <div class=" color">
        <div class="row mb-5">
          <div class="col-6 col-md-3 mb-4 mb-md-0">
            <h3>Search Trending</h3>
            <ul class="list-unstyled">
              <li><a href="#">Web Design</a></li>
              <li><a href="#">Graphic Design</a></li>
              <li><a href="#">Web Developers</a></li>
              <li><a href="#">Python</a></li>
              <li><a href="#">HTML5</a></li>
              <li><a href="#">CSS3</a></li>
            </ul>
          </div>
          <div class="col-6 col-md-3 mb-4 mb-md-0">
            <h3>Company</h3>
            <ul class="list-unstyled">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Career</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Resources</a></li>
            </ul>
          </div>
          <div class="col-6 col-md-3 mb-4 mb-md-0">
            <h3>Support</h3>
            <ul class="list-unstyled">
              <li><a href="#">Support</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
          <div class="col-6 col-md-3 mb-4 mb-md-0">
            <h3>Contact Us</h3>
            <div class="footer-social">
              <a href="#"><span class="icon-facebook"></span></a>
              <a href="#"><span class="icon-twitter"></span></a>
              <a href="#"><span class="icon-instagram"></span></a>
              <a href="#"><span class="icon-linkedin"></span></a>
            </div>
          </div>
        </div>

        <div class="row text-center">
          <div class="col-12">
            <p></p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import Navbar from './Navbar.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
  },
};
</script>
<style>
body{
  background-color: #80c2ee;
}
/* body {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(34, 39, 70);
  font-family: sans-serif;
} */

/* .container {
  max-width: 950px;
} */

.card {
  border-radius: 1rem;
  box-shadow: 0px -10px 0px rgb(151, 248, 6);
}

@media (max-width: 767px) {
  .card {
    margin: 1rem 0.7rem 1rem;
    max-width: 80vw;
  }
}

img {
  width: 6.2rem;
  border-radius: 5rem;
  margin: 1.3rem auto 1rem auto;
}

.col-md-4 {
  padding: 0 0.5rem;
}

.card-title {
  font-size: 1rem;
  margin-bottom: 0;
  font-weight: bold;
  font-family: "IM Fell French Canon SC";
}

.card-text {
  text-align: center;
  padding: 1rem 2rem;
  font-size: 0.8rem;
  color: rgb(82, 81, 81);
  line-height: 1.4rem;
}

.footer {
  border-top: none;
  text-align: center;
  line-height: 1.2rem;
  padding: 2rem 0 1.4rem 0;
  font-family: "Varela Round";
}

#name {
  font-size: 0.8rem;
  font-weight: bold;
}

#position {
  font-size: 0.7rem;
}

a {
  color: rgb(151, 248, 6);
  font-weight: bold;
}

a:hover {
  color: rgb(151, 248, 6);
}

</style>
