namespace MW_Backend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addEmailToUserProfileModel : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.UserProfiles", "Email", c => c.String(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.UserProfiles", "Email");
        }
    }
}
