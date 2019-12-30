namespace MW_Backend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addSortingAndSvgFieldsToCategories : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Categories", "Sorting", c => c.Int(nullable: false));
            AddColumn("dbo.Categories", "Svg", c => c.String());
            AddColumn("dbo.SubCategories", "Sorting", c => c.Int(nullable: false));
            AddColumn("dbo.SubCategories", "Svg", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.SubCategories", "Svg");
            DropColumn("dbo.SubCategories", "Sorting");
            DropColumn("dbo.Categories", "Svg");
            DropColumn("dbo.Categories", "Sorting");
        }
    }
}
