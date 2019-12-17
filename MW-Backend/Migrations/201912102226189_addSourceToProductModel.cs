namespace MW_Backend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addSourceToProductModel : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Products", "Source", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Products", "Source");
        }
    }
}
