namespace MW_Backend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addDeletedColToProductModel : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Products", "Deleted", c => c.Boolean(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Products", "Deleted");
        }
    }
}
