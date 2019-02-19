namespace MW_Backend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addStatusProduct : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Products", "Status", c => c.String(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Products", "Status");
        }
    }
}
