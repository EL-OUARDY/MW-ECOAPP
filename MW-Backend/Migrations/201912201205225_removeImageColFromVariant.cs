namespace MW_Backend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class removeImageColFromVariant : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.Variants", "Image");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Variants", "Image", c => c.String());
        }
    }
}
