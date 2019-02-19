namespace MW_Backend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class SizeIsNotRequired : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Products", "Size", c => c.String());
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Products", "Size", c => c.String(nullable: false));
        }
    }
}
