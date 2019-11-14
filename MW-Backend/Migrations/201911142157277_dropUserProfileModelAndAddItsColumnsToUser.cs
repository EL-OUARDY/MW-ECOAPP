namespace MW_Backend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class dropUserProfileModelAndAddItsColumnsToUser : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.UserProfiles", "ApplicationUserId", "dbo.AspNetUsers");
            DropIndex("dbo.UserProfiles", new[] { "ApplicationUserId" });
            AddColumn("dbo.AspNetUsers", "FullName", c => c.String(nullable: false, maxLength: 30));
            AddColumn("dbo.AspNetUsers", "Gender", c => c.String(maxLength: 10));
            AddColumn("dbo.AspNetUsers", "Phone", c => c.String(maxLength: 30));
            AddColumn("dbo.AspNetUsers", "Country", c => c.String(maxLength: 30));
            AddColumn("dbo.AspNetUsers", "City", c => c.String(maxLength: 30));
            AddColumn("dbo.AspNetUsers", "Avatar", c => c.String());
            DropTable("dbo.UserProfiles");
        }
        
        public override void Down()
        {
            CreateTable(
                "dbo.UserProfiles",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Email = c.String(nullable: false),
                        FullName = c.String(nullable: false, maxLength: 30),
                        Gender = c.String(maxLength: 6),
                        Phone = c.String(maxLength: 20),
                        Country = c.String(maxLength: 20),
                        City = c.String(maxLength: 20),
                        ApplicationUserId = c.String(maxLength: 128),
                    })
                .PrimaryKey(t => t.Id);
            
            DropColumn("dbo.AspNetUsers", "Avatar");
            DropColumn("dbo.AspNetUsers", "City");
            DropColumn("dbo.AspNetUsers", "Country");
            DropColumn("dbo.AspNetUsers", "Phone");
            DropColumn("dbo.AspNetUsers", "Gender");
            DropColumn("dbo.AspNetUsers", "FullName");
            CreateIndex("dbo.UserProfiles", "ApplicationUserId");
            AddForeignKey("dbo.UserProfiles", "ApplicationUserId", "dbo.AspNetUsers", "Id");
        }
    }
}
