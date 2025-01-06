class GroupCreationPage{

  constructor(page){
    this.page=page;
    this.creatGroupPage="//div[@class='x6s0dn4 x78zum5 xdt5ytf x193iq5w x1t2pt76 xh8yej3']";
    this.createNewGroupButton="//span[contains(text(),'Create New Group')]"
  }


  async createNewGroup(){
    await this.page.click(this.createNewGroupButton);
  }
}

module.exports=GroupCreationPage;