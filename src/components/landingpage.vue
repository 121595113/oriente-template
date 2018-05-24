<template>
  <div class="landingpage"  v-loading="loading">
    <div class="title-box">
      <div class="title-back el-icon-arrow-left" @click="goBack"></div>
      <div class="title-center">
         <p v-html="title"></p>
      </div>
    </div>
    <div class="landing-banner">
      <img src="../assets/images/landing-banner.png"/>
    </div>
    <div class="landing-apply">
      <img src="../assets/images/apply.png"/>
      <span>apply for a loan to buy</span>
    </div>
    <div class="landing-how">
      <div class="title">
        <p>How it Works</p>
      </div>
      <div class="process">
        <div class="stepNumber">
          <img src="../assets/images/nb1.png" class="stepImg">
          <span class="line1"></span>
          <img src="../assets/images/nb2.png" class="stepImg">
          <span class="line2"></span>
          <img src="../assets/images/nb3.png" class="stepImg">
        </div>
        <div class="steText">
          <div class="stePub steBottom">
            <h4>Today</h4>
            <p>Apply for a loan on Cashalo.</p>
          </div>
          <div class="stePub steBottom">
            <h4>Within 1 to 3 Business Days</h4>
            <p>When your loan is successful, the money will be transferred to your bank account and interest accrual starts.</p>
          </div>
          <div class="stePub">
            <h4>Before Due Date</h4>
            <p>Pay back loan via the Cashalo App.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="remarks">
      <p>• Only support the bill shopping at Robinson's shopping mall.</p>
      <p>• Please confirm with the counter clerk that your bill can apply for cashalo loan.</p>
    </div>
    <div class="help">
      <span>Need more help？</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'landingpage',
  data () {
    return {
      loading: true,
      title: 'Installment Buying',
      url: ''
    }
  },
  created () {
    this.getUrl()
  },
  methods: {
    goBack () {
      window.history.back()
    },
    getUrl () {
       this.loading = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title-box{
  padding: 4%;
  width: 92%;
  overflow: hidden;
  position: relative;
  border-bottom: 1px solid #ECECEC;
}
.title-back{
  display:inline-block;
  position: absolute;
  left: 2%;
  top: 50%;
  font-size: 1rem;
  margin-top:-0.5rem;
  color: #919498 ;
}
.title-center p{
  text-align:center;
  font-size: 1rem;
}
.landing-banner{
  width: 100%;
  overflow: hidden;
  position: relative;
}
.landing-banner img{
  width: 100%;
  display: block;
}
.landing-apply{
  width: 100%;
  overflow: hidden;
  position: relative;
}
.landing-apply img{
  width: 100%;
  display: block;
}
.landing-apply span{
  width: 88%;
  display: block;
  position: absolute;
  z-index: 1;
  left: 50%;
  top: 0;
  margin-left: -44%;
  line-height: 1rem;
  padding:4.2% 0;
  opacity: 0;
}
.landing-how{
  margin: 5.56% 4.45% 0;
}
.landing-how .title p{
  color: rgba(0,0,0,.8);
  letter-spacing: 0;
  font-size: .9rem;
  margin-left: .1rem;
  margin-bottom: .8rem;
  line-height: 1.4rem;
}
.process{
  overflow: hidden;
  position: relative;
}
.stepNumber{
  float: left;
  width: 8%;
  margin-left: 1.85%;
  font-size: .8rem;
}
.stepNumber img{
  max-width: 100%;
  margin: 0;
  vertical-align: bottom;
}
.line1{
  height: 2rem;
}
.line1, .line2{
  width: 2px;
  display: block;
  background: #e9e9e9;
  margin: 0 auto;
}
.line2{
  height: 3.8rem;
}
.steText{
  overflow: hidden;
  position: relative;
  width: 76%;
  margin-left: 4.27%;
  float: left;
}
.stePub{
  width: 100%;
}
.steBottom{
  border-bottom: 1px solid #ececec;
  margin-bottom: 5.56%;
}
.stePub h4{
  font-size: .8rem;
  color: #266bb7;
  line-height: .8rem;
}
.stePub p{
  font-size: .6rem;
  color: #888;
  line-height: .8rem;
  padding-bottom: .8rem;
  padding-top: .3rem;
}
.remarks{
  padding: 0 4% 4% 4%;
  width: 92%;
  overflow: hidden;
  position: relative;
}
.remarks p{
  color:rgba(0, 0, 0, 0.3);
  font-size:.6rem;
  line-height: .9rem;
  margin-bottom:.2rem;
}
.help{
 width: 92%;
 margin:0 auto 5% auto;
 overflow: hidden;
 position: relative;
}
.help span{
  display: block;
  background: #f0f6fb;
  border-radius: .3rem;
  font-size: .8rem;
  color: #266bb7;
  line-height: 2.3rem;
  text-align: center;
  text-decoration: none;
  width: 100%;
}
</style>
