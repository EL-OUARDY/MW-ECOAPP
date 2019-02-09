namespace MW_Backend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addFullNameToUser1 : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.AspNetUsers", "FullName", c => c.String(nullable: false, maxLength: 50));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.AspNetUsers", "FullName", c => c.String(nullable: false));
        }
    }
}
