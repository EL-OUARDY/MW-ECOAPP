namespace MW_Backend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class removeSlugFromCatSub : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.Categories", "Slug");
            DropColumn("dbo.SubCategories", "Slug");
        }
        
        public override void Down()
        {
            AddColumn("dbo.SubCategories", "Slug", c => c.String(nullable: false, maxLength: 30));
            AddColumn("dbo.Categories", "Slug", c => c.String(nullable: false, maxLength: 30));
        }
    }
}
