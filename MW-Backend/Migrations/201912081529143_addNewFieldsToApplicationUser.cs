namespace MW_Backend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addNewFieldsToApplicationUser : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.AspNetUsers", "Registration_Date", c => c.DateTimeOffset(nullable: false, precision: 7));
            AddColumn("dbo.AspNetUsers", "Last_Visite", c => c.DateTimeOffset(nullable: false, precision: 7));
            AddColumn("dbo.AspNetUsers", "UserAgent", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.AspNetUsers", "UserAgent");
            DropColumn("dbo.AspNetUsers", "Last_Visite");
            DropColumn("dbo.AspNetUsers", "Registration_Date");
        }
    }
}
